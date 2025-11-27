import Details from "./Details";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
  const id = (await params).id;
  return <Details id={id} />;
};

export default Page;
