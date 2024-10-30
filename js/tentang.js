// script.js

function showMemberBio(member) {
    const bioContent = document.getElementById("bioContent");

    const bios = {
        "NCT Dream": `NCT Dream adalah sub-unit ketiga dari boy group NCT, yang dibentuk oleh SM Entertainment pada tahun 2016. Grup ini terdiri dari tujuh anggota: Mark, Renjun, Jeno, Haechan, Jaemin, Chenle, dan Jisung. NCT Dream dikenal dengan konsep mereka yang berfokus pada tema masa muda, pertumbuhan, dan perjalanan remaja menjadi dewasa. Mereka memulai debutnya pada 24 Agustus 2016 dengan single "Chewing Gum." Seiring perkembangan grup, mereka telah menunjukkan berbagai sisi musik, mulai dari lagu-lagu ceria hingga konsep yang lebih dewasa.<br>
        Anggota NCT Dream dikenal dengan kemampuan vokal, tari, dan karisma panggung yang kuat, yang menjadikan mereka salah satu sub-unit NCT yang paling populer di antara para penggemar di seluruh dunia. Mereka juga aktif di berbagai platform sosial media, seperti:<br>
        Instagram: <a href="https://www.instagram.com/nct_dream">@nct_dream</a><br>
        Twitter: <a href="https://twitter.com/NCTsmtown_DREAM">@NCTsmtown_DREAM</a><br>
        YouTube: <a href="https://www.youtube.com/c/NCTDREAM">@NCTDREAM</a>`,

        "Mark Lee": `Stage Name: Mark (마크)<br>
        Birth Name: Mark Lee<br>
        Korean Name: Lee Min Hyung (이민형)<br>
        Position: Leader, Main Rapper, Main Dancer, Sub-Vocalist, Face of the Group<br>
        Birthday: August 2, 1999<br>
        Zodiac Sign: Leo<br>
        Height: 176 cm (5’9″)<br>
        Weight: 61 kg (134 lbs)<br>
        Blood Type: A<br>
        MBTI Type: INFJ<br>
        Nationality: Korean-Canadian<br>
        Instagram: <a href="https://www.instagram.com/onyourm__ark">@onyourm__ark</a>`,

        "Huang Renjun": `Stage Name: Renjun (런쥔)<br>
        Birth Name: Huang Renjun (黄仁俊)<br>
        Korean Name: Hwang In Joon (황인준)<br>
        Position: Main Vocalist, Lead Dancer<br>
        Birthday: March 23, 2000<br>
        Zodiac Sign: Aries<br>
        Height: 171 cm (5’7″)<br>
        Weight: 57 kg (126 lbs)<br>
        Blood Type: O<br>
        MBTI Type: N/A<br>
        Nationality: Chinese<br>
        Instagram: <a href="https://www.instagram.com/yellow_3to3">@yellow_3to3</a><br>
        Weibo: @黄仁俊_RENJUN`,

        "Lee Jeno": `Stage Name: Jeno (제노)<br>
        Birth Name: Lee Je No (이제노)<br>
        Position: Lead Dancer, Lead Rapper, Sub-Vocalist, Visual<br>
        Birthday: April 23, 2000<br>
        Zodiac Sign: Taurus<br>
        Height: 176.8 cm (5’10″)<br>
        Weight: 59 kg (130 lbs)<br>
        Blood Type: A<br>
        MBTI Type: N/A<br>
        Nationality: Korean<br>
        Instagram: <a href="https://www.instagram.com/leejen_o_423">@leejen_o_423</a>`,

        "Lee Haechan": `Stage Name: Haechan (해찬)<br>
        Birth Name: Lee Dong Hyuck (이동혁)<br>
        Position: Main Vocalist<br>
        Birthday: June 6, 2000<br>
        Zodiac Sign: Gemini<br>
        Height: 174 cm (5’8.5″)<br>
        Weight: 58 kg (128 lbs)<br>
        Blood Type: AB<br>
        MBTI Type: ESTP<br>
        Nationality: Korean<br>
        Instagram: <a href="https://www.instagram.com/haechanahceah">@haechanahceah</a> / <a href="https://www.instagram.com/fullsun_ncit">@fullsun_ncit</a> (Promo account)`,

        "Na Jaemin": `Stage Name: Jaemin (재민)<br>
        Birth Name: Na Jae Min (나재민)<br>
        Position: Lead Dancer, Sub-Rapper, Sub-Vocalist, Visual, Center<br>
        Birthday: August 13, 2000<br>
        Zodiac Sign: Leo<br>
        Height: 177 cm (5’10″)<br>
        Weight: 58 kg (128 lbs)<br>
        Blood Type: AB<br>
        MBTI Type: ISFJ<br>
        Nationality: Korean<br>
        Instagram: <a href="https://www.instagram.com/na.jaemin0813">@na.jaemin0813</a>`,

        "Zhong Chenle": `Stage Name: Chenle (천러)<br>
        Birth Name: Zhong Chenle (钟辰乐 / 鍾辰樂)<br>
        Korean Name: Jong Jin Rak (종진락)<br>
        Position: Main Vocalist<br>
        Birthday: November 22, 2001<br>
        Zodiac Sign: Scorpio/Sagittarius cusp<br>
        Height: 176 cm (5’9″)<br>
        Weight: 58 kg (128 lbs)<br>
        Blood Type: O<br>
        MBTI Type: ENTJ<br>
        Nationality: Chinese<br>
        Instagram: <a href="https://www.instagram.com/kh1000le">@kh1000le</a><br>
        Weibo: @KHCHENLE`,

        "Park Jisung": `Stage Name: Jisung (지성)<br>
        Birth Name: Park Ji Sung (박지성)<br>
        Position: Main Dancer, Sub-Vocalist, Sub-Rapper, Maknae<br>
        Birthday: February 5, 2002<br>
        Zodiac Sign: Aquarius<br>
        Height: 180 cm (5’11″)<br>
        Weight: 61 kg (134 lbs)<br>
        Blood Type: O<br>
        MBTI Type: INFP<br>
        Nationality: Korean<br>
        Instagram: <a href="https://www.instagram.com/the__and.y">@the__and.y</a>`
    };

    bioContent.innerHTML = `<h2>${member}</h2><p>${bios[member]}</p>`;
    document.getElementById("bioModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("bioModal").style.display = "none";
}
