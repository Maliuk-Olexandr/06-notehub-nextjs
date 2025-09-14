"use client";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <div>
      <p>Failed to load notes. {error.message}</p>
      <button onClick={reset}>Try Again</button>
    </div>
  );
}
