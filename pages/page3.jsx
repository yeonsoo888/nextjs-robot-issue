import HeadMeta from "../components/headMeta"


function Page3({isRobot}) {
  return (
    <>
        <HeadMeta title="page3" isRobot={isRobot}></HeadMeta>
        <div>Page3</div>
    </>
  )
}

export const getServerSideProps = ({ req }) => {
  const userAgent = req.headers['user-agent']
  const isRobot = /bot|spider|crawl/i.test(userAgent);
  return { props: { isRobot } }
}

export default Page3