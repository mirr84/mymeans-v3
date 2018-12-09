
const get = ({id, res}) => {

    res.send(
        {
            id
        }
    );

}

const getList = ({offset, limit, filter, res}) => {

    const t = (id, cardImg, cardTitle, cardSubtitle, cardText, button = false, body = false, inverse = false, color, style) =>
        ({ id, cardImg, cardTitle, cardSubtitle, cardText, button, body, inverse, color, style })

    const items = [
        t(
            1,
            'https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180',
            'Card title',
            'Card subtitle',
            'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            false,
            false,
            false,
            null,
            null
        ),
        t(
            2,
            'https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180',
            null,
            null,
            null,
            false,
            false,
            false,
            null,
            null
        ),
        t(
            3,
            null,
            'Card title',
            'Card subtitle',
            'This card has supporting text below as a natural lead-in to additional content.',
            true,
            false,
            false,
            null,
            null
        ),
        t(
            4,
            null,
            null,
            'Special Title Treatment',
            'With supporting text below as a natural lead-in to additional content.',
            true,
            true,
            true,
            null,
            {backgroundColor: '#333', borderColor: '#333'}
        ),
        t(
            5,
            'https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180',
            'Card title',
            'Card subtitle',
            'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
            true,
            false,
            false,
            null,
            null
        ),
        t(
            6,
            null,
            'Special Title Treatment',
            'Card subtitle',
            'With supporting text below as a natural lead-in to additional content.',
            true,
            true,
            true,
            'primary',
            null
        ),
        t(
            7,
            'https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180',
            null,
            null,
            null,
            false,
            false,
            false,
            null,
            null
        )
    ]

    const filteredList = items
        .filter( item => !filter ||
            (item.cardTitle && item.cardTitle.indexOf(filter)>-1) ||
            (item.cardSubtitle && item.cardSubtitle.indexOf(filter)>-1) ||
            (item.cardText && item.cardText.indexOf(filter)>-1)
        )

    setTimeout( () => {
        res.send(
            {
                items: filteredList,
                count: filteredList.length
            }
        );
    }, 1000 )

}

const init = (app) => {

    app.get(
        '/get',
        (req, res) => get({...req.query, res})
    )

    app.post(
        '/list',
        (req, res) => getList({...req.body, res})
    )

}

module.exports = ({init});