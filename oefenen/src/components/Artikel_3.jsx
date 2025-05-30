const Artikel_3 = ({ like: { heading_3 }, handleLike }) => {
  return (
    <div>
      <h2>Heading 3</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat eius
        amet porro, vel officiis at possimus autem neque nam doloremque odit
        voluptas fugit dicta perspiciatis omnis quaerat itaque illo dignissimos?
      </p>
      <button onClick={() => handleLike("heading_3")}>
        Add like :{heading_3}
      </button>
    </div>
  );
};

export default Artikel_3;
