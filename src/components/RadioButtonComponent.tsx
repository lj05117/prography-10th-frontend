import { useRecoilState } from "recoil";
import { selectedRadioState } from "../stores/ButtonState";

interface RadioProps {
  id: number;
  label: string;
}
export default function RadioButtonComponent({ id, label }: RadioProps) {
  const [selectedValue, setSelectedValue] = useRecoilState(selectedRadioState);

  return (
    <>
      <div onClick={() => setSelectedValue(id)}>
        <label>
          <input id={`id`} type="radio" checked={selectedValue === id} />
          {label}
        </label>
      </div>
    </>
  );
}
