import { useMutation } from "@tanstack/react-query";
import {submitRecruitData} from "../services/recruit-funnel.ts";
import {recruitState} from "../stores/ButtonState.ts";

export function useRecruitMutation(){
  return useMutation({
    mutationFn:(data:recruitState)=>submitRecruitData(data),
    onSuccess:()=>{
      alert("제출이 성공적으로 완료되었습니다.")
    },
    onError:(error)=>{
      console.log("Error: ", error)
      alert("제출에 실패하였습니다.")
    }
  })
}