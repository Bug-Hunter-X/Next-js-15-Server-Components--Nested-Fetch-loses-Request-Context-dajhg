To solve this, you need to explicitly pass the required headers or cookies to nested `fetch` calls. One approach is to extract the relevant information (like cookies) from the initial `request` object and pass it along to subsequent requests, potentially using a custom function or context.

```javascript
// pages/api/data.js (remains unchanged)
// pages/index.js (Server Component)
export default async function Home({ cookies }) {
  const data = await fetch('/api/data', {
    headers: {
      'Cookie': cookies,
    },
  });
  const json = await data.json();

  const nestedData = await fetchData(json.someId, cookies);

  return (
    <div>
      <h1>{json.message}</h1>
      <p>Nested Data: {nestedData}</p>
    </div>
  );
}
async function fetchData(id, cookies){
  const response = await fetch(`/api/nested/${id}`, {
    headers: {
      'Cookie': cookies
    }
  });
  return response.json()
}
```

By explicitly passing the cookies (or other required headers) in the `fetch` options, you ensure that the nested requests have the necessary context to operate correctly.  Consider adapting this pattern for other contextual information needed in nested requests within your Next.js 15 server components.