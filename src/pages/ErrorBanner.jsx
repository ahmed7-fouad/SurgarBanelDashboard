import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
export default function ErrorBanner() {
  return (
    <>
      <section className="errorBanner d-flex flex-column align-items-center justify-content-center">
        <SentimentVeryDissatisfiedIcon className="text-light" style={{fontSize:"9rem"}}/>
        <h1 className="text-capitalize text-light fw-bold" style={{fontSize:"4rem"}}>
          page not found error 404
        </h1>
      </section>
    </>
  );
}
