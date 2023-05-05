const complimentBtn = document.getElementById("complimentButton")
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment)

const nonComplimentBtn = document.getElementById("nonComplimentButton")
const getNonCompliment = () => {
    axios.get("http://localhost:4000/api/nonCompliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
nonComplimentBtn.addEventListener('click', getNonCompliment)