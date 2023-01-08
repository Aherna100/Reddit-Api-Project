import './Avatar.css';

const Avatar = (props) => {
    const { name } = props;

    const numAvatar = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

    const hexaAvatar = [
        'A5A4A4',
        '545452',
        'A06A42',
        'C18D42',
        'FF4500',
        'FF8717',
        'FFB000',
        'FFD635',
        'DDBD37',
        'D4E815',
        '94E044',
        '46A508',
        '46D160',
        '0DD3BB',
        '25B79F',
        '008985',
        '24A0ED',
        '0079D3',
        '7193FF',
        '4856A3',
        '7E53C1',
        'FF66AC',
        'DB0064',
        'EA0027',
        'FF585B'
    ]

    function getRandomSnoo(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <div className='imgAvatar'>
            <img
                src={`https://www.redditstatic.com/avatars/avatar_default_${numAvatar[getRandomSnoo(20)]}_${hexaAvatar[getRandomSnoo(hexaAvatar.length)]}.png`}
                alt={`profile ${name}`}
                className='avatar-profile'
            />
        </div>

    );
}

export default Avatar;