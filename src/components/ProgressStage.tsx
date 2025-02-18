import {
  StepCircle,
  StepBar,
  ProgressContainer,
} from "../styles/progress-stage.ts";

export default function ProgressStage({ step }) {
  return (
    <ProgressContainer>
      <>
        {Array.from({ length: 3 }, (_, i) => i + 1).map((num: number) => (
          <div key={num} style={{ display: "flex", alignItems: "center" }}>
            <StepCircle $active={num <= step}>{num}</StepCircle>
            {num < 3 && <StepBar $active={num < step} />}
          </div>
        ))}
      </>
    </ProgressContainer>
  );
}
