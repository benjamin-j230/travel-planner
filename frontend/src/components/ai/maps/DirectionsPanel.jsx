const DirectionsPanel = ({ directions }) => {
  if (!directions) return null;

  return (
    <div className="directions-panel">
      <div className="directions-summary">
        <p>
          <strong>Distance:</strong> {directions.distance.text} &nbsp;|&nbsp;
          <strong> Duration:</strong> {directions.duration.text}
        </p>
        <p className="directions-route">
          {directions.startAddress} → {directions.endAddress}
        </p>
      </div>
      <ol className="directions-steps">
        {directions.steps.map((step, idx) => (
          <li key={idx}>
            {step.instruction}
            <span className="step-meta"> ({step.distance}, {step.duration})</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default DirectionsPanel;