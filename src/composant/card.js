const makeCard = (data) => {
    return `<div class="card">
    <a href=${data.href}>
      
        <div class="card-image"><img src=${data.imageUrl} alt="" /></div>

        <div class="card-body">

            <div class="card-date">
                <time>${data.date}</time>
            </div>
            <div class="card-title">
                <h3>${data.title}</h3>
            </div>
            <div class="card-excerpt">
                <p>${data.desc}</p>
            </div>

        </div>
    </a>
</div>`;
};

export default makeCard;
