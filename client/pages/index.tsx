import Link from "next/link";
import Layout from "../components/Layout";
import { useLoginMutation } from "../generated/apolloComponents";

const IndexPage = () => {
  const [loginMutation, { data, loading, error }] = useLoginMutation({
    variables: {
      username: "",
      password: "",
    },
  });

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Fuckerssss!! Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <button
          onClick={() =>
            loginMutation({
              variables: { username: "topzdev", password: "123" },
            })
          }
        >
          <p>{data && data.login?.message ? "Logged in" : "Click to login"}</p>
        </button>
      )}
    </Layout>
  );
};

export default IndexPage;
