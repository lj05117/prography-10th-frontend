export async function submitRecruitData(data){
  const response = await fetch("sample/url",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },body:data
  })

  if(!response.ok){
    throw new Error("지원서 전송에 실패하였습니다.")
  }

  return response.json();
}