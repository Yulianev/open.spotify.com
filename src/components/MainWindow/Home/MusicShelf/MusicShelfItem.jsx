import PropTypes from 'prop-types'

export default function MusicShelfItem(props) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'start',
                padding: '16px',
                gap: '16px',
                backgroundColor: '#161616',
                boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.3)',
                borderRadius: '8px',
            }}
        >
            <img
                style={{
                    borderRadius: '8px',
                    width: '100%',
                    boxShadow: '0px 5px 15px 0px rgba(0,0,0,0.7)',
                }}
                src={props.img}
                alt=""
            />
            <article>
                <h3 style={{ fontSize: '0.9rem' }}>{props.title}</h3>
                <span style={{ fontSize: '0.75rem', color: '#b2b2b2' }}>
                    {props.creator}
                </span>
            </article>
        </div>
    )
}


MusicShelfItem.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string,
    creator: PropTypes.string
}