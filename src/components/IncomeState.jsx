export default function IncomeState({ icon, state, percentage }) {
  function setStyle(state){
    if(state==="su"){
      return { backgroundColor: "#21ae6cb1", color: "rgb(95 247 22)" };
    }else if(state === "da"){
      return (
        { backgroundColor: "#e84f5eb5",color:"var(--danger)" }
      )
    }else if (state === "pr"){
       return (
        { backgroundColor: "#4286eba8",color:"var(--bs-primary)" }
       );
    }
  }
  return (
    <section
      className="py-2 px-3 rounded-5"
      style={setStyle(state)}
    >
      {icon !==null ? icon : ""} {percentage}
      
    </section>
  );
}
