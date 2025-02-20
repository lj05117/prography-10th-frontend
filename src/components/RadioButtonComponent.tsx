import { RoundedBorderBox } from "../styles/layout.ts";

interface RadioProps {
  id: number;
  label: string;
}
export default function RadioButtonComponent({
  id,
  name,
  label,
  onSelect,
  selected,
}: RadioProps) {
  return (
    <>
      <RoundedBorderBox onClick={() => onSelect(id)}>
        <label>
          <input
            type="radio"
            name={name}
            checked={selected}
            onChange={() => onSelect(id)}
          />
          {label}
        </label>
      </RoundedBorderBox>
    </>
  );
}
