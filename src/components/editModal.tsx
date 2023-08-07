import PostProductPage from "@/pages/dashboard/product";
import { MantineProvider } from "@mantine/core";
import { SpotlightProvider } from "@mantine/spotlight";
import { Button, Group } from "@mantine/core";
import { spotlight } from "@mantine/spotlight";
import EditProductPage from "@/pages/dashboard/product/[id]";
// import type { SpotlightAction } from "@mantine/spotlight";

export default function EditModal({ id }: string | any) {
  function ActionsWrapper({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <EditProductPage id={id} />
      </div>
    );
  }

  function SpotlightControl() {
    return (
      <Group position="center">
        <Button
          onClick={spotlight.open}
          style={{
            backgroundColor: "#fed766",
            color: "black",
            fontWeight: 400,
          }}
        >
          Изменить продукт
        </Button>
      </Group>
    );
  }

  return (
    <MantineProvider>
      <SpotlightProvider actions={[]} actionsWrapperComponent={ActionsWrapper}>
        <SpotlightControl />
      </SpotlightProvider>
    </MantineProvider>
  );
}
