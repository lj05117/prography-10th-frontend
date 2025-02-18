import { useRecoilState } from "recoil";
import { selectedRadioState } from "../stores/ButtonState";
import { RoundedBorderBox } from "../styles/layout.ts";

interface RadioProps {
  id: number;
  label: string;
}
export default function RadioButtonComponent({ id, label }: RadioProps) {
  const [selectedValue, setSelectedValue] = useRecoilState(selectedRadioState);

  return (
    <>
      <RoundedBorderBox onClick={() => setSelectedValue(id)}>
        <label>
          <input id={`id`} type="radio" checked={selectedValue === id} />
          {label}
        </label>
      </RoundedBorderBox>
    </>
  );
}
