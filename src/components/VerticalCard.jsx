import TimeBound from "/src/components/TimePound"
export default function VerticalCard({heading,selections,linkContent,innerComponent}){
    return (
      <section
        className="p-4 rounded-4 position-relative"
        style={{
          background: "var(--light)",
          height: "100%",
          overflow: "scroll",
        }}
      >
        <TimeBound
          title={heading}
          selections={selections}
          linkContent={linkContent}
        />
        <section className="pb-3" style={{height:"35rem" , overflow:"scroll"}}>
            {innerComponent}
        </section>
      </section>
    );
}