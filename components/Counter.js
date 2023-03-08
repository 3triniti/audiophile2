function Counter({ count, updateCount }) {
  const handleIncrease = () => {
    updateCount(count + 1);
  };
  const handleDecrease = () => {
    updateCount(count - 1);
  };
  return (
    <div>
      <button
        className="bg-neutral-100 h-10 w-10 text-xs font-light"
        onClick={handleDecrease}
      >
        -
      </button>
      <span className="bg-neutral-100 text-xs font-light">{count}</span>
      <button
        className="bg-neutral-100 h-10 w-10 text-xs font-light"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
