export async function getServerSideProps() {
    const uA = window.navigator.userAgent;
    const isRobot = /bot|spider|crawl/i.test(uA);
    console.log(isRobot);

    return { props: { isRobot } }
}