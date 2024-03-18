const BuchungForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    fetch("http://localhost:3000/buchungen", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="AutoNr" placeholder="AutoNr" />
        <input type="date" name="Datum" />
        <input type="date" name="StartDatum" />
        <input type="date" name="EndDatum" />
        <input type="text" name="Vorname" placeholder="Vorname" />
        <input type="text" name="Nachname" placeholder="Nachname" />
        <button>Buchen</button>
      </form>
    </>
  );
};

export default BuchungForm;
