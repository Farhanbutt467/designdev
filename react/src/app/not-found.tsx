import errorData from "@/config/errorData.json";
import ErrorPage from "@/components/error/ErrorPage ";
import BrandingHeader from "@/components/headers/BrandingHeader";
import SeoData from "@/components/tools/SeoData";

export default function NotFound() {
  return (
    <main>
      <SeoData
        meta_title={"Not Found Page"}
        description={"Not Found Page Description"}
      />
      <BrandingHeader />
      <ErrorPage data={errorData.data} />
    </main>
  );
}
