const CarForm = () => {
  return (
    <div className="container">
      <form>
        <h2>Add car</h2>
        <div>
          <input type="text" placeholder="Car brand" name="brand" />
        </div>
        <div>
          <input type="text" placeholder="Car model" name="model" />
        </div>
        <div>
          <input type="number" placeholder="Car year" name="year" />
        </div>
        <button>Add car</button>
      </form>
    </div>
  );
};

export default CarForm;
