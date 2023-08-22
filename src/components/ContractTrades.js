import { TrademarkOutlined } from "@ant-design/icons";
import { Button, Modal, Skeleton, Tooltip } from "antd";
import { useEffect, useState } from "react";

const ContractTrades = ({ tokenAddress }) => {
  const [modalOpen, setModalOpen] = useState();

  return (
    <>
      <Tooltip title="Trade(s) in this contract">
        <Button
          disabled={tokenAddress === ""}
          style={{ border: "none" }}
          shape="circle"
          icon={<TrademarkOutlined />}
          onClick={() => setModalOpen(true)}
        />
      </Tooltip>
      <Modal
        width={1000}
        title="Trade(s) Chart"
        destroyOnClose
        open={modalOpen}
        footer={null}
        onCancel={() => setModalOpen(false)}
      ></Modal>
    </>
  );
};

export default ContractTrades;
