import styles from "./TrapezoidSection.module.css";

const TrapezoidSection = (props) => {
  return (
    <div className={ styles.trapezoidContainer + " relative" }>
      <div className={styles.trapezoidBlack + " flex items-center"}>
        <div className="w-1/2 bmargin-left">
          {
            props.alert
            ?
            <p className="text-alert mb-1 uppercase font-bold">Disponible ahora</p>
            :
            ""
          }
          <p className></p>
          <p className="text-white font-bold text-5xl uppercase mb-2">{props.title}</p>
          <p className="text-white mb-6">{props.description}</p>
          {
            props.link
            ?
            <a href="/" className="font-bold text-white uppercase border py-4 px-8 inline-block">{props.link}</a>
            :
            ""
          }
        </div>
      </div>
      <img src={props.img} alt={props.alt} className="ml-auto w-2/3"/>
    </div>
  )
}

export default TrapezoidSection