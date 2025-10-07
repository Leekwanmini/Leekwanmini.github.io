type Props = { name?: string };

export default function WelcomeBanner({ name }: Props) {
  // Condition rendering
  //It shows error message when submission is empty
  if (!name || name.trim().length === 0) {
    return (
      <header>
        <h1 style={{ fontSize: '4rem' }}>Welcome!</h1>
        <p className="error">Please enter your name.</p>
      </header>
    );
  }
  
  return (
    <header>
      <h1 style={{ fontSize: '4rem' }}>Welcome, {name}</h1>
    </header>
  );
}