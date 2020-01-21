import Card from "@material-ui/core/Card";
import styles from "../ShopPage.module.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import React from "react";

class ShopPageBookList extends React.Component {
  allItems = this.props.books
    .map((item, index) => (
      <Card
        className={styles.card}
        key={item.isbn13}
      >
        <CardActionArea
          onClick={() => this.props.showModal(index)}
        >
          <CardMedia
            className={styles.media}
            image={item.image}
            title={"buy me"}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {item.title}
            </Typography>
          </CardContent>
          <Divider/>
        </CardActionArea>
        <CardActions>
          <Typography gutterBottom variant="h6" component="h2">
            {item.price}$
          </Typography>
          <Button onClick={() => this.props.showModal(index)} size="small" color="primary">
            Details
          </Button>
        </CardActions>
      </Card>));

  render() {
    return (
      <div className={styles.shopPage}>
        {this.allItems}
      </div>
    )
  }
}

export default ShopPageBookList;
