import useCartCtx from "../../hooks/useCartCtx.jsx";
import Modal from "../UI/Modal.jsx";

function ChangeCurrency() {
  const modalId = "changeCurrencyModal";
  const { handler } = useCartCtx();

  return (
    <>
      <button
        className="btn btn-outline text-sm"
        onClick={() => document.getElementById(modalId).showModal()}
      >
        Change
      </button>
      <Modal id={modalId} className="w-fit">
        <h2 className="text-2xl">Change Currency</h2>
        <select
          onChange={(e) => handler.setCurrency(e.target.value)}
          defaultValue="USD"
          className="select my-8 w-100"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="CAD">CAD</option>
          <option value="AUD">AUD</option>
          <option value="AED">AED</option>
          <option value="BGN">BGN</option>
          <option value="BRL">BRL</option>
          <option value="CHF">CHF</option>
        </select>
        <form method="dialog" className="text-right">
          <button className="btn btn-primary">Close</button>
        </form>
      </Modal>
    </>
  );
}

export default ChangeCurrency;
