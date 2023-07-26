export async function loginPost(data: any) {
  console.log(data);
  const responce = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

//   console.log(responce);
  const JsonResponce = await responce.json();
  console.log(JsonResponce, 'data');
  return JsonResponce;
}
