import { decodeData } from "@/lib/utils";
import NotFound from "../Not-found";
import { BACKGROUND_OPTIONS } from "@/components/Background/BgSnippets";
import DataLoading from "./loading";
import DisplayScreen from "@/components/screen/DisplayScreen";

export async function generateMetadata({ searchParams }: any) {
  const data = decodeData(searchParams.data);

  if (!data) {
    return {};
  }

  return {
    title: `${data.n}'s`,
    description: `Find all of ${data.n}'s links in one place.`,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://Quickfolio.vercel.app",
      title: `${data.n}'s - Quickfolio`,
      description: `Find all of ${data.n}'s links in one place.`,
      images: `https://Quickfolio.vercel.app/api/og?data=${encodeURI(data.n)}`,
      siteName: `${data.n}'s - Quickfolio`,
    },
    // twitter: {
    //   card: "summary_large_image",
    //   title: `${data.n} - Quickfolio`,
    //   description: `Find all of ${data.n}'s links in one place.`,
    //   images: `https://Quickfolio.vercel.app/api/og?data=${encodeURI(data.n)}`,
    //   creator: "",
    // },
  };
}

const linkLandingPage = ({ searchParams }: any) => {
  if (!searchParams.data) NotFound();

  const data = decodeData(searchParams.data);
  
  const selectedBgOption = data
    ? BACKGROUND_OPTIONS.find((option) => option.code === data.bg)
    : null;

  const selectedBgComponent = selectedBgOption
    ? selectedBgOption.component
    : null;

  return (
    <>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        {selectedBgComponent}
      </div>
      <div className="p-2 pt-10 hide_scrollbar">
        {data ? <DisplayScreen myData={data} /> : <DataLoading />}
      </div>
    </>
  );
};

export default linkLandingPage;
