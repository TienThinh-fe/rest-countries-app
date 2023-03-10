import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, DetailContent } from "./components";
import { countryDetail } from "./interfaces";
import { getDetailCountry } from "./helper";
import useStore from "./store";

import RightArrowIcon from "./assets/right-arrow.webp";

function Detail() {
  const { slug } = useParams();
  const [detailCountry, setDetailCountry] = useState<countryDetail>({
    name: "",
    officialName: "",
    population: 0,
    region: "",
    subregion: "",
    capital: "",
    topLevelDomain: [],
    currencies: [],
    languages: [],
    borders: [],
    flags: "",
  });
  const navigate = useNavigate();
  const [isLoadingDetail, setIsLoadingDetail] = useStore((state: any) => [
    state.isLoadingDetail,
    state.setIsLoadingDetail,
  ]);
  const theme = useStore((state: any) => state.theme);

  useEffect(() => {
    getDetailCountry(slug)
      .then((res) => {
        setIsLoadingDetail(true);
        setDetailCountry({
          name: res[0].name.common,
          officialName: res[0].name.official,
          population: res[0].population,
          region: res[0].region,
          subregion: res[0].subregion,
          capital: res[0].capital,
          topLevelDomain: res[0].tld,
          currencies: res[0].currencies,
          languages: res[0].languages,
          borders: res[0].borders,
          flags: res[0].flags.svg,
        });
        setIsLoadingDetail(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [slug]);

  return (
    <div className={`detail detail__${theme}`}>
      <Header />
      <div
        className="detail__back"
        onClick={() => {
          navigate("/");
        }}
      >
        <span className="detail__back--content">
          <img src={RightArrowIcon} alt="Right Arrow" />
          <span>Back</span>
        </span>
      </div>
      {isLoadingDetail ? (
        <div className="detail__content">Loading...</div>
      ) : (
        <DetailContent detail={detailCountry} />
      )}
    </div>
  );
}

export default Detail;
