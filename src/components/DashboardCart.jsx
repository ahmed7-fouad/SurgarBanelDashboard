import Button from 'react-bootstrap/Button';
import IncomeState from "/src/components/IncomeState.jsx";

export default function DashboardCart({
  mainTitle,
  price,
  link,
  priceExtention,
  state,
  icon,
  percentage,
  message,
  btnContent,
  extraContent,
  bgColor,
  textColor
}) {
    
  return (
    <>
      <section
        style={{ backgroundColor: `${bgColor}`,minHeight:"10rem"}}
        className="rounded-4 p-3 w-100 " 
      >
        <section className="mb-4 d-flex align-items-center justify-content-between">
          <section >
            <h3
              className="fw-semibold d-flex pb-0 mb-1"
              style={{
                color: `${textColor}`,
                fontSize: price ? "1rem" : "1.3rem",
                textTransform: "capitalize",
              }}>

              {mainTitle}

            </h3>

            {price !== null ? (
              <h4 className="fs-3">
                $<span>{price}</span>
                <span className="text-secondary">{priceExtention}</span>{" "}
              </h4>
            ) : (
              ""
            )}
          </section>
          {link !== null ? (
            <a
              href="#">
              {" "}
              {link}{" "}
            </a>
          ) : (
            ""
          )}
          {percentage !== null ? (
            <IncomeState state={state} icon={icon} percentage={percentage} />
          ) : (
            ""
          )}
        </section>

        <section className="d-flex align-items-center justify-content-between">
          {message !== null ? (
            <p className="text-secondary fw-medium text-capitalize">
              {message}
            </p>
          ) : (
            ""
          )}
          {btnContent !== null ? (
            <Button variant="dark" className="rounded-4">
              {btnContent}
            </Button>
          ) : (
            ""
          )}
          {extraContent !== null ? <section>{extraContent}</section> : ""}
        </section>
      </section>
    </>
  );
}