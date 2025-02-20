import {
  StepCircle,
  StepBar,
  ProgressContainer,
} from "../styles/progress-stage.ts";

export default function ProgressStage({ step }) {
  return (
    <ProgressContainer>
      <>
        {Array.from({ length: 2 }, (_, i) => i + 1).map((num: number) => (
          <div key={num} style={{ display: "flex", alignItems: "center", width:"100%" }}>
            <StepCircle $active={num <= step}>{num}</StepCircle>
            {num < 3 && <StepBar $active={num < step} />}
          </div>
        ))}
        <div>
          <StepCircle $active={step===3}>{3}</StepCircle>
        </div>
      </>
    </ProgressContainer>
  );
}
