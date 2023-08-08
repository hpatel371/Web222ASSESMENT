window.onload = function() {
    let reviewContainer = document.getElementById('reviews');

    for (let review of window.reviewData) {
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${review.name}</h3><p>${review.date}</p><p>${'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}</p><p>${review.text}</p>`;
        reviewContainer.appendChild(card);
    }

    let form = document.getElementById('reviewForm');
    form.onsubmit = function(e) {
        e.preventDefault();
        let name = document.getElementById('name').value;
        let date = document.getElementById('date').value;
        let rating = document.getElementById('rating').value;
        let text = document.getElementById('review').value;
        window.reviewData.push({name: name, date: date, rating: parseInt(rating), text: text});
        reviewContainer.innerHTML = '';
        for (let review of window.reviewData) {
            let card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<h3>${review.name}</h3><p>${review.date}</p><p>${'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}</p><p>${review.text}</p>`;
            reviewContainer.appendChild(card);
        }
    }
}
