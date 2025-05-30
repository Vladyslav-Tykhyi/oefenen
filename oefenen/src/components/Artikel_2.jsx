const Artikel_2 = ({ like: { heading_2 }, handleLike }) => {
  return (
    <div>
      <h2>Heading 2</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat eius
        amet porro, vel officiis at possimus autem neque nam doloremque odit
        voluptas fugit dicta perspiciatis omnis quaerat itaque illo dignissimos?
      </p>
      <button
        onClick={() => {
          handleLike("heading_2");
        }}
      >
        Add like : {heading_2}
      </button>
    </div>
  );
};

export default Artikel_2;
