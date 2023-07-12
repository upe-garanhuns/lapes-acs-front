export default function HourCount() {
  const Ges = 80;
  const Ext = 10;
  const Pes = 20;
  const Ens = 10;
  const nome = 'Lara';

  const totalHoras: number = Ges + Ext + Pes + Ens;
  const faltamHoras: number = 180 - totalHoras;
  const porcentagemConcluida: number = (totalHoras / 180) * 100;

  function getColor(percent: number): string {
    const colors = ['#FF5640', '#FFC140', '#7BD684'];
    const segments = (colors.length - 1) * 0.5;
    const segmentSize = 100 / segments;

    let index = 0;
    if (percent < 50) {
      index = Math.floor(percent / segmentSize);
    } else {
      index = Math.floor((100 - percent) / segmentSize) + segments;
    }

    return colors[index];
  }

  return (
    <div
      style={{
        margin: '10px',
        backgroundColor: '#DCDCDC',
        borderRadius: '8px',
        padding: '10px'
      }}
    >
      <p
        style={{
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          fontSize: '32px'
        }}
      >
        Bem vindo(a), {nome}!
      </p>
      <hr style={{ border: '2px solid #E5E5E5', margin: '20px 0' }} />
      <div style={{ textAlign: 'match-parent' }}>
        <span
          style={{
            display: 'inline-block',
            marginRight: '10%',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            fontSize: '25px'
          }}
        >
          Minhas Horas:
        </span>
        <p
          style={{
            display: 'inline-block',
            marginRight: '15%',
            borderBottom: '4px solid',
            color: 'blue',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            fontSize: '15px'
          }}
        >
          Ges: {Ges}h
        </p>
        <p
          style={{
            display: 'inline-block',
            marginRight: '15%',
            borderBottom: '4px solid',
            color: 'red',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            fontSize: '15px'
          }}
        >
          Ext: {Ext}h
        </p>
        <p
          style={{
            display: 'inline-block',
            marginRight: '15%',
            borderBottom: '4px solid',
            color: 'green',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            fontSize: '15px'
          }}
        >
          Pes: {Pes}h
        </p>
        <p
          style={{
            display: 'inline-block',
            marginRight: '15%',
            borderBottom: '4px solid',
            color: 'purple',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            fontSize: '15px'
          }}
        >
          Ens: {Ens}h
        </p>
      </div>

      <div
        style={{
          margin: '5px',
          border: '2px solid #9ac5a1',
          borderRadius: '10px',
          background: '#b0b0b0'
        }}
      >
        <p
          style={{
            border: '0px',
            marginLeft: '4%',
            marginRight: '0%',
            marginBottom: '0px',
            borderTop: '25px',
            maxHeight: '50%',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          Total: <span style={{ marginLeft: '85%' }}>{totalHoras}/180</span>
        </p>

        <div
          style={{
            backgroundColor: '#EEE',
            height: '20px',
            borderRadius: '10px',
            display: 'flex',
            marginBottom: '15px',
            maxWidth: '95%',
            marginLeft: '35px'
          }}
        >
          <div
            style={{
              backgroundColor: 'blue',
              width: `${(Ges / 180) * 100}%`,
              borderRadius: '10px 0 0 10px'
            }}
          />
          <div
            style={{ backgroundColor: 'red', width: `${(Ext / 180) * 100}%` }}
          />
          <div
            style={{ backgroundColor: 'green', width: `${(Pes / 180) * 100}%` }}
          />
          <div
            style={{
              backgroundColor: 'purple',
              width: `${(Ens / 180) * 100}%`,
              borderRadius: '0 10px 10px 0'
            }}
          />
        </div>
      </div>
    </div>
  );
}
