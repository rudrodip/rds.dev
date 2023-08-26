type Props = {
  name: string,
  onClick: () => void,
}

const ShineButton: React.FC<Props> = ({ name, onClick }) => {
  return (
    <div>
      <button
        className="sheen"
        onClick={onClick}
      >
        {name}
        <div className="shine"></div>
      </button>
    </div>
  );
};

export default ShineButton