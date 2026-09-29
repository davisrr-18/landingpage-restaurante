import { useState } from 'react';
import Button from '../../components/ui/Button/Button.jsx';
import Section from '../../components/ui/Section/Section.jsx';
import styles from './Reservations.module.css';

const initialForm = {
  name: '',
  email: '',
  date: '',
  guests: '2',
};

function formatDateInput(value) {
  const digits = value.replace(/\D/g, '').slice(0, 8);
  const parts = [digits.slice(0, 2), digits.slice(2, 4), digits.slice(4, 8)];
  return parts.filter(Boolean).join('/');
}

function parseBrDate(value) {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);

  if (!match) {
    return null;
  }

  const [, day, month, year] = match.map(Number);
  const date = new Date(year, month - 1, day);
  const isRealDate =
    date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;

  return isRealDate ? date : null;
}

function isBeforeToday(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
}

function Reservations() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    const nextValue = name === 'date' ? formatDateInput(value) : value;
    setForm((current) => ({ ...current, [name]: nextValue }));
    setError('');
  }

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const guestsCount = Number(form.guests);

    if (!trimmedName || !trimmedEmail) {
      setSent(false);
      setError('Preencha nome e e-mail com caracteres válidos, não apenas espaços.');
      return;
    }

    const reservationDate = parseBrDate(form.date);

    if (!reservationDate) {
      setSent(false);
      setError('Informe uma data válida no formato dd/mm/aaaa.');
      return;
    }

    if (isBeforeToday(reservationDate)) {
      setSent(false);
      setError('A data da reserva não pode estar no passado.');
      return;
    }

    if (!Number.isInteger(guestsCount) || guestsCount < 1 || guestsCount > 8) {
      setSent(false);
      setError('O número de pessoas deve ser um valor inteiro entre 1 e 8.');
      return;
    }

    setError('');
    setSent(true);
    setForm(initialForm);
  }

  return (
    <Section id="reservas" eyebrow="Mesa" title="Reserve um lugar na brasa">
      <div className={styles.layout}>
        <p className={styles.copy}>
          O pedido fica só neste navegador — não há backend. Use o formulário
          para demonstrar o fluxo de reserva na landing. Em um projeto real,
          daqui sairia um e-mail ou uma API.
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          {sent ? (
            <p className={styles.success} role="status">
              Pedido registrado na demonstração. Obrigado, até breve.
            </p>
          ) : null}
          {error ? (
            <p className={styles.error} role="alert">
              {error}
            </p>
          ) : null}
          <label className={styles.label}>
            Nome
            <input
              className={styles.input}
              name="name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              maxLength={100}
              required
            />
          </label>
          <label className={styles.label}>
            E-mail
            <input
              className={styles.input}
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              maxLength={254}
              required
            />
          </label>
          <div className={styles.row}>
            <label className={styles.label}>
              Data
              <input
                className={styles.input}
                name="date"
                type="text"
                inputMode="numeric"
                placeholder="dd/mm/aaaa"
                pattern="\d{2}/\d{2}/\d{4}"
                title="Use o formato dd/mm/aaaa"
                maxLength={10}
                value={form.date}
                onChange={handleChange}
                required
              />
            </label>
            <label className={styles.label}>
              Pessoas
              <input
                className={styles.input}
                name="guests"
                type="number"
                min="1"
                max="8"
                value={form.guests}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <Button type="submit" fullWidth>
            Enviar pedido
          </Button>
        </form>
      </div>
    </Section>
  );
}

export default Reservations;
