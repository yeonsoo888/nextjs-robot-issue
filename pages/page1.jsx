import HeadMeta from "../components/headMeta"


function Page1({isRobot}) {
  return (
    <>
        <HeadMeta title="page1" isRobot={isRobot}></HeadMeta>
        <div>Page1 123123123123</div>
    </>
  )
}

export const getServerSideProps = ({ req }) => {
  const userAgent = req.headers['user-agent']
  const isRobot = /bot|spider|crawl/i.test(userAgent);
  return { props: { isRobot } }
}


export default Page1