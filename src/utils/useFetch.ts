export async function getFetchQuery(url: string): Promise<any> {
  const headers = new Headers({
    Accept: "application/json, charset=utf-8",
    "Content-Type": "application/json",
  });
  const init: RequestInit = {
    headers,
    method: "GET",
  };
  const req = new Request(`${url}`, init);

  const response = await fetch(req, init);
  if (response.ok) {
    const responseJson = await response.json();
    if (responseJson?.status === "success") {
      return responseJson.data;
    }
    throw new Error(responseJson?.message as string);
  }
  throw new Error("Network_error");
}
