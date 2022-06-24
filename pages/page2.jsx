import HeadMeta from "../components/headMeta"


function Page2({isRobot}) {
  return (
    <>
        <HeadMeta title="page2" isRobot={isRobot}></HeadMeta>
        <div>Page2</div>
    </>
  )
}

export const getServerSideProps = ({ req }) => {
  const userAgent = req.headers['user-agent']
  const isRobot = /bot|spider|crawl/i.test(userAgent);
  return { props: { isRobot } }
}


export default Page2