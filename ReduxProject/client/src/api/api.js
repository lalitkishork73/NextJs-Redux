export async function getData() {
    const data = await fetch('/data');
    const jsonData = await data.json();
    return jsonData.data;
}