export async function loginPost(data: any) {
  const response = await fetch('http://localhost:3001/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  

  const JsonResponce = await response.json();

  return JsonResponce;
}
