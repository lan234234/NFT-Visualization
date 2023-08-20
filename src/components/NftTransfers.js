import { Button, Table, Tooltip, Modal } from "antd";
import { useState } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";

const ModalContent = () => {
  return <Table columns={[]} dataSource={[]} pagination={{ pageSize: 5 }} />;
};

const NftTransfers = ({ nft }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Tooltip title="Transder(s) on this NFT">
        <Button
          style={{ border: "none" }}
          size="large"
          shape="circle"
          icon={<InfoCircleOutlined />}
          onClick={() => setModalOpen(true)}
        />
      </Tooltip>
      <Modal
        width={1000}
        title="Transfer(s) List"
        destroyOnClose
        open={modalOpen}
        footer={null}
        onCancel={() => setModalOpen(false)}
      >
        <ModalContent nft={nft} />
      </Modal>
    </>
  );
};

export default NftTransfers;
