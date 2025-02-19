import { useRecoilState } from "recoil";
import { selectedRadioState } from "../stores/ButtonState";
import { RoundedBorderBox } from "../styles/layout.ts";

interface RadioProps {
  id: number;
  label: string;
}
export default function RadioButtonComponent({ id, name, label }: RadioProps) {
  const [selectedValue, setSelectedValue] = useRecoilState(selectedRadioState);

  return (
    <>
      <RoundedBorderBox onClick={() => setSelectedValue(id)}>
        <label>
          <input
            type="radio"
            name={name}
            checked={selectedValue === id}
            onChange={() => setSelectedValue(id)}
          />
          {label}
        </label>
      </RoundedBorderBox>
    </>
  );
}
