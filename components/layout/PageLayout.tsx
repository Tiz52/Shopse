import {useRouter} from "next/router";
import {FC} from "react";
import {Header, Meta} from ".";

interface Props {
  children?: React.ReactNode;
  title: string;
  pageDescription: string;
  imgUrl?: string;
}

export const PageLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imgUrl,
}) => {
  const router = useRouter();

  return (
    <>
      <Meta title={title} pageDescription={pageDescription} imgUrl={imgUrl} />
      <div
        className={`${
          router.asPath.includes("product")
            ? "bg-productMobile md:bg-product"
            : "bg-black"
        }`}
      >
        <Header />
        <main className="pt-[72px] max-w-[1440px] mx-auto">{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
};
