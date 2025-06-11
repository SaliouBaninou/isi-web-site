'use client'
import '@/style/components/newsLetter.css'
function NewsLetter() {
    return (
        <div className='news-letter-div'>
            <h5>L{"'"}institut de la compétence</h5>
            <h2>S{"'"}abonner à ISI</h2>
            <p>Abonnez vous à ISI. <br/>
                Entrez votre email et recevez les dernières mises à jour et offres
            </p>
            <form>
                <div className="form-group-newsletter">
                    <input type="email" placeholder="Votre email"/>
                    <button type='button'>S{"'"}abonner</button>
                </div>
            </form>
        </div>
    );
}

export default NewsLetter;